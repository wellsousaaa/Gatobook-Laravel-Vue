<template>
    <div class="form-container">
        <form @submit.prevent="handleSubmit">
            <div class="input-container">
                <div class="user-image">
                    <img :src="'https://avatars.dicebear.com/api/open-peeps/' + username + '.svg'" alt="user image"
                        class="form-image">
                </div>

                <div class="form-field">
                    <div class="form-field__control">
                        <textarea required name="body" id="additionalInfo" class="form-field__textarea" placeholder=""
                            maxlength="100"></textarea>
                        <label for="additionalInfo" class="form-field__label">Escreva algo....</label>
                        <div class="form-field__bar"></div>
                    </div>
                </div>
            </div>

            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Form",
    props: {
        method: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            username: localStorage.getItem( "gatobook_username" ) || ''
        }
    },
    methods: {
        async handleSubmit( { target } ) {
            target.style.opacity = 0.5;
            target.style.pointerEvents = 'none';

            const formData = new FormData( target );

            const text = formData.get( 'body' );

            await axios.get( `https://cataas.com/c/gif/s/${ encodeURI( text ) }?json=true` ).then(
                ( { data } ) => {
                    formData.set( 'image', data.url );
                }
            );

            formData.set( 'username', this.username );

            const headers = {
                'X-CSRF-TOKEN': document.querySelector( 'meta[name="csrf-token"]' ).getAttribute( 'content' ),
            };

            console.log( formData );

            axios.post( '/api/posts', formData, { headers } )
                .then( ( { data } ) => {
                    console.log( data );
                    target.reset();
                } )
                .catch( error => {
                    alert( "Erro ao enviar post" );
                    console.log( error );
                } );

            this.method();

            target.style.opacity = 1;
            target.style.pointerEvents = 'all';
        }
    },
}
</script>
<template>
    <div class="form-container">
        <form @submit.prevent="handleSubmit">
            <div class="input-container">
                <div class="user-image">
                    <img :src="'https://avatars.dicebear.com/api/open-peeps/' + 'wellsousaaa' + '.svg'" alt="user image"
                        class="form-image">
                </div>
                <textarea placeholder="Escreva uma frase..." name="body"></textarea>
            </div>

            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Form",
    methods: {
        async handleSubmit( { target } ) {
            const formData = new FormData( target );

            const text = formData.get( 'body' );

            await axios.get( `https://cataas.com/c/gif/s/${ encodeURI( text ) }?json=true` ).then(
                ( { data } ) => {
                    formData.set( 'image', data.url );
                }
            );

            const headers = {
                'X-CSRF-TOKEN': document.querySelector( 'meta[name="csrf-token"]' ).getAttribute( 'content' ),
            };

            console.log( formData );

            axios.post( '/api/posts', formData, { headers } )
                .then( ( { data } ) => {
                    console.log( data );
                } )
                .catch( error => {
                    console.log( error );
                } );
        }
    },
    props: {}
}
</script>
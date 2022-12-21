<template>
    <div class="login-container">
        <p style="font-size: 1.1rem; width: 90vw; margin: auto; padding-top: 50px;">
            Preencha o seu nome de usuário para entrar no Gatobook
        </p>
        <form @submit.prevent="handleSubmit">

            <div class="form-field">
                <div class="form-field__control">
                    <input v-model="username" name="username" id="additionalInfo" class="form-field__textarea"
                        placeholder="">
                    <label for="additionalInfo" class="form-field__label">Username</label>
                    <div class="form-field__bar"></div>
                </div>
            </div>


            <button type="submit">Entrar</button>
        </form>
    </div>

    <footer>
        <p>Wendell de Sousa | 2022</p>
    </footer>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            username: localStorage.getItem( "gatobook_username" ) || ''
        }
    },
    methods: {
        async handleSubmit() {
            if ( !this.username ) return alert( "Digite um username" );
            // const formData = new FormData( target );

            // const username = formData.get( 'username' );

            localStorage.setItem( "gatobook_username", this.username );

            this.$router.push( '/' );
        }
    },
}
</script>
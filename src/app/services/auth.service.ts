export default class AuthService {

    isAuth = false;

    signIn(){
        return new Promise(resolve => {
            setTimeout(() => {
                this.isAuth = true;
                resolve(this.isAuth);
            }, 2000);
        });
    }

    signOut(){
        return new Promise(resolve => {
            setTimeout(() => {
                this.isAuth = false;
                resolve(this.isAuth);
            }, 2000);
        });
    }

}

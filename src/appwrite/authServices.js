import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";
import {logger} from "../utils/logger.js";


export class AuthService {
    client = new Client();
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({email, password});
            } else {
                return userAccount
            }
        } catch (error) {
            logger.error("appwrite service :: createAccount :: error", error);

        }

    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            logger.error("appwrite service :: Login :: error", error);
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            logger.error("appwrite service :: logout :: error", error);
        }
    }


    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            logger.error("appwrite service :: getCurrentUser :: error", error);

        }
    }


}

const authService = new AuthService

export default authService

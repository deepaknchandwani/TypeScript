import * as request from 'request';
import {User} from "./User"
import { Repo } from './Repo';

const  OPTIONS : any = {
    headers:{
        'User-Agent':'request'
    },
    json:true
}

export class GithunApiService {

  
    getUserInfo(userName : String , cb : (user : User) => any){

      

        request.get('https://api.github.com/users/' + userName , OPTIONS , (error :any , reponse:any , body :any)=>{
            console.log("1");

            //  console.log(error);
            //  console.log(reponse);
             console.log(body);
             console.log("2");

            let user = new User (body);
            console.log(user);
            cb(user);
        })
    }

    getRepo(userName : String , cb : (repos : Repo[]) => any){
        request.get('https://api.github.com/users/' + userName +"/repos", OPTIONS , 
        (error :any , reponse:any , body :any)=>{
 
          let repos = body.map((repo : any ) => new Repo(repo));  
           
            cb(repos);
        })
    }
}
import {GithunApiService} from "./GitHubApiService";
import { User } from "./User";
import { Repo } from "./Repo";
import request = require("request");
import * as _ from 'lodash';

let srv = new GithunApiService();
// normal 2 calls

// srv.getUserInfo('deepaknchandwani' , (user :User )=>{
// console.log(user);
// } );
// srv.getRepo ('deepaknchandwani' , (repos : Repo[])=>{
// console.log(repos);
// })

//  chaning
srv.getUserInfo('deepaknchandwani' , (user :User )=>{

    srv.getRepo ('deepaknchandwani' , (repos : Repo[])=>{
        let sortedRepos =_.sortBy(repos ,(repo : Repo ) => repo.size )

        user.repos=sortedRepos;
        console.log(user);
        })

} );
   
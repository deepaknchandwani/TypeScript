"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubApiService_1 = require("./GitHubApiService");
var _ = __importStar(require("lodash"));
var srv = new GitHubApiService_1.GithunApiService();
// normal 2 calls
// srv.getUserInfo('deepaknchandwani' , (user :User )=>{
// console.log(user);
// } );
// srv.getRepo ('deepaknchandwani' , (repos : Repo[])=>{
// console.log(repos);
// })
//  chaning
srv.getUserInfo('deepaknchandwani', function (user) {
    srv.getRepo('deepaknchandwani', function (repos) {
        var sortedRepos = _.sortBy(repos, function (repo) { return repo.size; });
        user.repos = sortedRepos;
        console.log(user);
    });
});

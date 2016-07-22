"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var GithunApiService = /** @class */ (function () {
    function GithunApiService() {
    }
    GithunApiService.prototype.getUserInfo = function (userName, cb) {
        request.get('https://api.github.com/users/' + userName, OPTIONS, function (error, reponse, body) {
            console.log("1");
            //  console.log(error);
            //  console.log(reponse);
            console.log(body);
            console.log("2");
            var user = new User_1.User(body);
            console.log(user);
            cb(user);
        });
    };
    GithunApiService.prototype.getRepo = function (userName, cb) {
        request.get('https://api.github.com/users/' + userName + "/repos", OPTIONS, function (error, reponse, body) {
            var repos = body.map(function (repo) { return new Repo_1.Repo(repo); });
            cb(repos);
        });
    };
    return GithunApiService;
}());
exports.GithunApiService = GithunApiService;

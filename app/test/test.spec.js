
import 'babel-polyfill';
import {GithubApi} from "../src/js/services/fetch.js";
import { customizeUsersResponse } from "../src/js/helpers.js";

describe("API functions", () => {
    const api = new GithubApi();
    it('Check if the user exist', async () => {
        expect.assertions(1);
        const data = await api.checkUserExist('rafaelvenegasd')
        return expect(data.login).toBe('rafaelvenegasd');
    });
    it('Check if the api return repositories', async () => {
        const data = await api.getRepos('rafaelvenegasd')
        return expect(data[0].name).toContain('Bootstrap3');
    });
    it('Check if the api return commits', async () => {
        const data = await api.getCommits('rafaelvenegasd', 'Bootstrap3')
        return expect(data[0].sha).toContain('857ef2511fefee98960c50e6b8e04a4a336e0702');
    });
    it('Check if the api return forks', async () => {
        const data = await api.getForks('rafaelvenegasd', 'Bootstrap3')
        const expected = [];
        return expect(data).toMatchObject(expected);
    });
});



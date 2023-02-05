import ServerRemote from "../../server/ServerRemote";
class MemeRepository extends ServerRemote {
    uploadImage = (file, memeId, name) => {
        if (!file) {
            return;
        }
        console.log(file);
        const formData = new FormData();
        formData.append('imageFile', file);
        formData.append('memeId', memeId);
        formData.append('name', name);

        const api = "/upload/images/";
        const method = "POST";

        return this.getData(api, method, formData, {});
    };

    uploadMeme = (fileName, tags) => {
        const postBody = {
            imageUrl : fileName,
            tags : tags
        };

        const api = "/api/v1/memes";
        const method = "POST";
        const headers = {'Content-Type' : 'application/json'};

        return this.getData(api, method, postBody, headers);
    }

    getRecentMemes = async() => {
        const api = "/api/v1/memes/popular";
        const method = "GET";

        return await this.getData(api, method, {}, {});
    }

    getImageUrl = async(id) => {
        const api = `/download/images/${id}`;
        const method = "GET";
        // const headers = {
        //     "Content-Type" : "application/json; charset=UTF-8",
        //     "responseType" : "blob",
        //     "timeout" : 5000
        // };

        const data = await this.getData(api, method, {}, {});

        return data;
    }

    getMemeTag = async(id) => {
        const api = `/api/v1/memes/${id}`;
        const method = "GET";

        return await this.getData(api, method, {}, {});
    }
}

export default new MemeRepository();
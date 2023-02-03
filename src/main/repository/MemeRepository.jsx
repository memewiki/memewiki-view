import ServerRemote from "../../server/ServerRemote";

class MemeRepository extends ServerRemote {
    uploadImage = async(file) => {
        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append('imageFile', file);

        const api = "/upload/images";
        const method = "POST";
        const headers = {'Content-Type' : 'multipart/form-data'};

        return this.getData(api, method, formData, headers);
    };

    uploadMeme = async(fileName, tags) => {
        const postBody = {
            imageUrl : fileName,
            tags : tags
        };

        const api = "/api/v1/memes";
        const method = "POST";
        const headers = {'Content-Type' : 'application/json'};

        return this.getData(api, method, postBody, headers);
    }
}

export default new MemeRepository();
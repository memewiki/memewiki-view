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

        this.getData(api, method, formData, headers);
    };
}

export default new MemeRepository();
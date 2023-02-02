import ServerRemote from "../../server/ServerRemote";

class MemeRepository extends ServerRemote {
    onUploadImage = async(e) => {
        if (!e.target.files) {
            return;
        }

        const formData = new FormData();
        formData.append('image', e.target.files[0]);

        const api = "/upload/images";
        const method = "POST";
        const headers = {'Content-Type' : 'multipart/form-data'};

        this.getData(api, method, formData, headers);
    };
}

export default new MemeRepository();
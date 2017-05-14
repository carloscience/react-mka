import $ from 'jquery';

const RestApi = {
    get: url => {
        return new Promise((success, error) => {
            $.ajax({
                url,
                dataType: 'json',
                success,
                error
            });
        });
    }
}

export default RestApi;
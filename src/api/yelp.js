import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3',
    headers: {
        Authorization: 'Bearer xGkfCynkAEyUJPVzoIQobHYpSDn-aNvf_jQIQ8CZd2GZGK9R71xTo4V3BU7kFLy-J1Qj3B1TZLAimF3cUbTA9iX9jB8uieF4psQ8TczmnbCYQSh3oa8NwKoI8ccUXnYx'
    }
});
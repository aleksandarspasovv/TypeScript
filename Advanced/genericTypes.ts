type APIResponse = {
    data: any;
    isPositive: boolean;
}

type APIResponse2<T> = {
    data: T;
    isPositive: boolean;
}


const apiResponse: APIResponse2<string> = {
    data: 'string',
    isPositive: true
}


function returnResponse<T>(data: T): T | string {
    return `You used ${data} of type ${typeof data}`;
}


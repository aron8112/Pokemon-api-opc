class httpResponses {

    static Ok = 'The action was complete successfully';
    static Created = 'Creation successful';
    static No_Content = 'There is no content for the requirement you ask';
    static Bad_Request = 'Your request is wrong or incomplete, please do it again';
    static Unauthorized = 'You must be logged in to access this page';
    static Forbidden = 'You do not have permissions for the action';
    static Not_found = 'The page you are looking for does not exist';
    static Internal_Server_Error = 'Something went wrong, the server was unable to complete your request';
};

module.exports = httpResponses;
export const GetMessages = (e) => {
    const messages = [];
    if(e.validity.valueMissing){
        messages.push("Value Required")
    }
    if(e.validity.typeMismatch){
        messages.push(`Invalid ${e.type}`);
    }
    return messages;
}
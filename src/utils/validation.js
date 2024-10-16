function validateEditInput(req){
const allowedEditableField = ["firstName","lastName","about","photoURL","skill","age"];

const isAllowed =Object.keys(req.body).every(field=>allowedEditableField.includes(field));

return isAllowed;

}

module.exports = {validateEditInput}
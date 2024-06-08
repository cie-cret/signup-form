    // const userForm = ({ onSave, user = {} }) => {
    //     const [data, setData] = useState(user);
    //     const [errors, setErrors] = useState({});
    //     const { fName, lName, email, password } = data;  
    // }

    // const validateData = () => {
    //     let errors = {};

    //     if (!fName) {
    //         errors.fName = "First Name cannot be empty"
    //     }

    //     if (!lName) {
    //         errors.fName = "Last Name cannot be empty"
    //     }

    //     return errors;
    // };

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setData((register) => ({ ...register, [name]: value}));
    // };

    // const handleSave = () => {
    //     const errors = validateData();
    //     if (Object.keys(errors).length) {
    //         setError(errors);
    //         // Have errors, do not continue saving
    //         return;

    //     setError({});
    //     console.log(data);
    //     onSave(data);
    //     }
    // }
const userModel = require("../Model/userModel");

const LoginPage = (req, res) => {
  res.render("/login");
}

// Fetch data from database
const AllData = async (req, res) => {
  try {
    const userData = await userModel.find();
    res.status(201).json(userData);
    console.log(userData);
  } catch (error) {
    res.status(422).json(error);
  }
  
}

// Fetch individual data
const Login = async (req, res) => {
  try {
    console.log(req.params);
    const {id} = req.params
    const user = await userModel.findById({ _id: id });
    res.status(201).json(user);
    console.log(user);
 } catch (error) {
    res.status(422).json(error);
 }
}

// Register Data
const Signup = async (req, res) => {
  console.log(req.body);
  const { firstname,lastname,email, password } = req.body;
  try {
    const addUser = new userModel({
      firstname,lastname,email,password
    })

    await addUser.save();
    res.status(201).json(addUser);
    console.log(addUser);
  } catch (error) {
    res.status(422).json(error);
  }
}


// update data 
const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const updataUser = await userModel.findByIdAndUpdate(id, req.body, {
      new :true
    })
    console.log(updataUser);
    res.status(201).json(updataUser);
  } catch (error) {
    res.status(422).json(error);
  }

}

// delete data
const DeleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteData = await userModel.findByIdAndDelete({ _id: id });
    console.log(deleteData);
    res.status(201).json(deleteData);
  } catch (error) {
     res.status(422).json(error);
  }
}



module.exports = {
  Signup,
  AllData,
  Login,
  updateData,
  DeleteData,
  LoginPage
};


















// const home = async (req, res) => {
//   try {
//     res.render("Home");
//   } catch (error) {
//     console.error(error);
//   }
// }

// const login = async (req, res) => {
//   try {
//     res.render("Login");
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// const loginPost = async (req, res) => {
//   console.log(req.body);

//   new userModel(req.body)
//     .save()
//     .then(() => {
//       res.status(200).json({ message: "success" });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json(err);
//     });
// };


// // const home = async (req, res) => {
// //   try {
// //     res.render("Home");
// //   } catch (error) {
// //     console.log(error.message);
// //   }
// // };

// const homePost = async (req, res) => {
//   try {
//     // chech if user exist
//   } catch (error) {
    
//   }
// };

// module.exports = {
//   login,
//   loginPost,
//   home,

// };

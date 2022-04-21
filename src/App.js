// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import {Collapse , Heading, Box} from "@mui/material";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";

// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";

// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import {
//   BiDotsVerticalRounded,
//   BiCommentDetail,
//   BiEdit,
//   BiTrash,
// } from "react-icons/bi";
// import {
//   BsHeart,
//   BsBookmark,
//   BsHeartFill,
//   BsBookmarkFill,
// } from "react-icons/bs";
// // import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import pic from "./pic.jpg";

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (

//     <>
//     <div style={{textAlign: "center", marginTop: "30px", marginBottom: "20px"}}>
//       Posts
//     </div>

//     {[0, 1, 2].map((value) => (
//     <Card sx={{ maxWidth: 600 }} style={{margin: "auto"}}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       {/* <CardMedia component="img" height="194" image={pic} /> */}
// <CardContent>
//   <Typography variant="body2" color="text.secondary">
//     This impressive paella is a perfect party dish and a fun meal to cook
//     together with your guests. Add 1 cup of frozen peas along with the
//     mussels, if you like.
//   </Typography>
// </CardContent>
// <CardActions disableSpacing>

//   <Box alignItems="center" gap="0.4rem" display="contents">
//     <IconButton aria-label="Like" isRound={true}
//     // onClick={likePost}
//     >
//       <BsHeartFill size="1.5rem" cursor="pointer" />
//       {/* ) : (
//           <BsHeart size="1.5rem" cursor="pointer" />
//         )} */}
//     </IconButton>
//     <Typography as="h5" size="sm" color="gray.600">
//       {/* {likes?.length} */} 2
//     </Typography>

//     <IconButton aria-label="Like" isRound={true}
//     // onClick={likePost}
//     style={{paddingLeft: "20px"}}
//     >
//       <BiCommentDetail size="1.5rem" cursor="pointer" />
//       {/* ) : (
//           <BsHeart size="1.5rem" cursor="pointer" />
//         )} */}
//     </IconButton>
//     <Typography as="h5" size="sm" color="gray.600">
//       {/* {likes?.length} */} 2
//     </Typography>
//   </Box>
// </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and
//             set aside for 10 minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
//             over medium-high heat. Add chicken, shrimp and chorizo, and cook,
//             stirring occasionally until lightly browned, 6 to 8 minutes.
//             Transfer shrimp to a large plate and set aside, leaving chicken and
//             chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
//             onion, salt and pepper, and cook, stirring often until thickened and
//             fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
//             cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and
//             peppers, and cook without stirring, until most of the liquid is
//             absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
//             shrimp and mussels, tucking them down into the rice, and cook again
//             without stirring, until mussels have opened and rice is just tender,
//             5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then
//             serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//     ))}
//     </>
//   );
// }

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navigate } from "react-router-dom";

// import { Navbar } from './app/Navbar'

import { PostsList } from "./features/posts/PostsList";
import { AddPostForm } from "./features/posts/AddPostForm";
import { CommentBox } from "./features/posts/CommentBox";
import ModalForm from "./features/posts/ModalForm";

function App({handleOpen, handleClose}) {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddPostForm />
                <PostsList handleOpen={handleOpen} handleClose={handleClose}/>
                <ModalForm handleOpen={handleOpen} handleClose={handleClose}/>
              </>
            }
          />

          {/* <Route exact path="/posts/:postId" element={<SinglePostPage />} />
          <Route exact path="/editPost/:postId" element={<EditPostForm />} /> */}
          <Route exact path="/commentbox" element={<CommentBox />} />
          <Route path="/" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

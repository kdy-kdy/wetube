import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const middleWareLocal = (req, res, next) => {
  /* locals 추가 -> 템플릿, 컨트롤러, 어디에서든 사용.
    만약 이 함수를 middleware처럼 따로 js파일을 만들지 않고 app.js파일에 넣으면 userRouter와 globalRouter에서 locals에 접근 불가. */
  res.locals.siteName = "Wetube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  console.log(req.user);
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile");

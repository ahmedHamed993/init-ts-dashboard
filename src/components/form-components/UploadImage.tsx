import React, {
  useState,
  useEffect,
  ChangeEvent,
  FC,
  Dispatch,
  SetStateAction,
} from "react";
import {
  SetFieldValue,
  UseFormTrigger,
  FieldValues,
  Path,
} from "react-hook-form";
// mui
import { Box, Avatar, Button, Stack } from "@mui/material";
// icons
import { FiUploadCloud } from "react-icons/fi";
import { CiImageOn } from "react-icons/ci";
// compoents
import ErrorMessage from "./ErrorMessage";

// types
type TProps<T extends FieldValues> = {
  defaultImage?: string;
  imgAspectRatio?: string;
  objectFit?: "cover" | "contain";
  setValue: SetFieldValue<T>;
  errorMessage?: string | undefined;
  height?: string;
  trigger: UseFormTrigger<T>;
  name?: Path<T>;
};
const UploadImage: FC<TProps<any>> = ({
  defaultImage,
  imgAspectRatio = "16/9",
  objectFit = "cover",
  setValue,
  height = "400px",
  trigger,
  errorMessage,
  name = "img",
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(
    defaultImage ? defaultImage : ""
  );

  // useEffect(() => {
  //   setImgSrc(defaultImage);
  // }, [defaultImage]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      let x = e.target.files[0];
      showFileInPreview(x);
      setValue(name, x);
      triggerImgError();
    }
  };
  const triggerImgError = () => trigger(name);

  const showFileInPreview = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const finalResult: string | undefined = reader.result?.toString();
      setImgSrc(finalResult?.toString());
    };
  };
  return (
    <Stack alignItems="center" gap="8px" maxWidth="100%">
      <Box
        id="img-preview-wrapper"
        sx={{
          aspectRatio: imgAspectRatio,
          border: "1px solid #ddd",
          minWidth: {
            xs: "200px",
            // sm: imgAspectRatio === "1/1" ? "200px" : "400px",
          },
          // maxWidth: imgAspectRatio === "1/1" ? "200px" : "400px",
          backgroundColor: "#fff",
          maxHeight: "400px",
          height: height,
          borderRadius: "4px",
          overflow: "hidden",
          position: "relative",
          maxWidth: "100%",
          // height: "200px",
          // maxHeight: "400px",
        }}
      >
        <img
          src={imgSrc}
          alt="img"
          style={{
            width: "100%",
            height: "100%",
            fontSize: "10rem",
            objectFit: objectFit,
            maxWidth: "100%",
            backgroundColor: "#fff",
          }}
        />
        {!imgSrc ? (
          <Box
            position="absolute"
            top="0"
            left="0"
            height="100%"
            width="100%"
            zIndex="2"
            sx={{
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "10rem",
            }}
          >
            <CiImageOn />
          </Box>
        ) : (
          <></>
        )}
      </Box>
      <input
        type="file"
        name="upload-img"
        id="upload-img"
        hidden
        onChange={handleFileChange}
      />
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : <></>}
      <Button
        component="label"
        htmlFor="upload-img"
        variant="contained"
        endIcon={<FiUploadCloud />}
      >
        اختر الصورة
      </Button>
    </Stack>
  );
};

export default UploadImage;

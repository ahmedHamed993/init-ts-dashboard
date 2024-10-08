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
// import ErrorMessage from "../messages/ErrorMessage";
import ErrorMessage from "./ErrorMessage";
// utils
import Compressor from "compressorjs";
// types
type TProps<T extends FieldValues> = {
  defaultImage?: string;
  imgAspectRatio?: string;
  objectFit?: "cover" | "contain";
  setValue: SetFieldValue<T>;
  errorMessage?: string | undefined;
  height?: string | Record<string, any>;
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

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      let x = e.target.files[0];
      if (x.size > 2 * 1024 * 1024) {
        new Compressor(x, {
          quality: (1024 * 1024) / x.size,
          success(blob) {
            const file = new File([blob], x.name, {
              type: x.type,
              lastModified: x.lastModified,
            });
            showFileInPreview(file as File);
            setValue(name, file);
            triggerImgError();
          },
        });
      } else {
        showFileInPreview(x);
        setValue(name, x);
        triggerImgError();
      }
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
    <Stack alignItems="center" gap="8px">
      <Box
        id="img-preview-wrapper"
        sx={{
          aspectRatio: imgAspectRatio,
          minWidth: {
            xs: "200px",
          },
          maxHeight: "400px",
          height: height,
          borderRadius: "10px",
          overflow: "hidden",
          border: "1px solid #ddd",
          position: "relative",
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
              backgroundColor: "#f1f1f1",
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
        اختر صورة
      </Button>
    </Stack>
  );
};

export default UploadImage;

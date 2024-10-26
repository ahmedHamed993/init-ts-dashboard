import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState, useCallback } from "react";
import fetching from "../helpers/fetching/fetching";

const useMeta = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["meta"],
    queryFn: () => {
      return fetching("/meta")
        .then((res) => res.json)
        .then((data) => data);
    },
    gcTime: 3600000,
    staleTime: 3600000,
  });
  return { data };
};

export default useMeta;

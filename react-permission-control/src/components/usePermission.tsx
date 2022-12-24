import axios, { AxiosError, AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";

const usePermission = (props?: any) => {
  const [permoactions, setPermoactions] = React.useState([]);
  const [access, setAccess] = React.useState([]);

  const getPermissions = async (url: string, config: AxiosRequestConfig) => {
    try {
      const res = await axios.get(url, config);
      setPermoactions(res.data);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    getPermissions("", {});
  }, [props]);

  React.useMemo(() => {
    let permissions: string[] = [];
    let actions: string[] = [];
    let access = {} as any;

    permoactions.forEach((p: string) => {
      const splittedP = p.split(":");
      const permission = splittedP[0];
      const action = splittedP[1];
      access[permission] = [...access[permission], action];
    });
    setAccess(access);
  }, [permoactions]);

  return access;
};
export default usePermission;

const ac = {
  measurePage: ["read", "write", "delete"],
  activityPage: ["write"],
};

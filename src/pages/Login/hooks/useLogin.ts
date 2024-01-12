import { FormEvent, useEffect, useState } from "react";
import { useAuthentication } from "../../../hooks/useAuthentication";

export const useLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean | string>("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setError("");
    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return {
    handleSubmit,
    setPassword,
    setEmail,
    password,
    email,
    loading,
    error,
  };
};

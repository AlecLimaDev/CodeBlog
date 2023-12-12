import { useState, useEffect } from "react";
import { useAuthentication } from "../../../hooks/useAuthentication";

export const useRegister = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading }: any = useAuthentication();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setError("");
    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }

    const res = await createUser(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return {
    handleSubmit,
    setDisplayName,
    setEmail,
    setPassword,
    setConfirmPassword,
    confirmPassword,
    password,
    loading,
    authError,
    error,
    email,
    displayName,
  };
};

import { useState, FormEvent, useEffect } from "react";
import { useAuthentication } from "../../../hooks/useAuthentication";

export const useRegister = () => {
  const [displayName, setDisplayName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { createUser, loginWithGitHub, error: authError, loading }: any = useAuthentication();

  const handleSubmit = async (e: FormEvent) => {
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

  const handleGitHubLogin = async () => {
    try {
      setError("");
      await loginWithGitHub();
    } catch (error) {
      setError("Erro ao realizar login com o GitHub");
    }
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return {
    handleSubmit,
    handleGitHubLogin,
    setDisplayName,
    setEmail,
    setPassword,
    setConfirmPassword,
    loading,
    email,
    password,
    confirmPassword,
    error,
    displayName,
  };
};

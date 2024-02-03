import Button from "@components/buttons/button";
import Input from "@components/inputs/input";
import Layout from "@components/layout";
import useMutation from "@libs/client/use-mutation";
import useUser from "@libs/client/use-user";
import { NextPage } from "next";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface EditProfileForm {
  name?: string;
  email?: string;
  phone?: string;
  formErrors?: string;
}

interface EditProfileResponse {
  ok: boolean;
  error?: string;
}

const EditProfile: NextPage = () => {
  const { user } = useUser();
  const {
    register,
    setValue,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<EditProfileForm>();
  const [editProfile, { data, loading }] =
    useMutation<EditProfileResponse>(`/api/users/me`);

  useEffect(() => {
    if (user?.name) setValue("name", user.name);
    if (user?.email) setValue("email", user.email);
    if (user?.phone) setValue("phone", user.phone);
  }, [user, setValue]);

  useEffect(() => {
    if (data && !data.ok && data.error) {
      setError("formErrors", { message: data.error });
    }
  }, [data, setError]);

  const onValid = ({ name, email, phone }: EditProfileForm) => {
    if (loading) return;

    if (name === "" && email === "" && phone === "") {
      return setError("formErrors", {
        message: "Email or Phone number are required. You need to choose one.",
      });
    }

    editProfile({ name, email, phone });
  };

  return (
    <Layout title="Edit Profile" canGoBack>
      <form onSubmit={handleSubmit(onValid)} className="py-10 px-4 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-slate-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700"
          >
            Change
            <input
              id="picture"
              className="hidden"
              type="file"
              accept="image/*"
            />
          </label>
        </div>

        <div className="space-y-1">
          <Input
            register={register("name")}
            type="text"
            label="Name"
            name="name"
          />
        </div>

        <div className="space-y-1">
          <Input
            register={register("email")}
            type="email"
            label="Email address"
            name="email"
          />
        </div>

        <div className="space-y-1">
          <Input
            register={register("phone")}
            type="phone"
            label="Phone number"
            name="phone"
          />
        </div>

        {errors.formErrors ? (
          <span className="my-2 text-red-500 font-medium text-center block">
            {errors.formErrors.message}
          </span>
        ) : null}
        <Button
          label={loading ? "Loading" : "Update profile"}
          onClick={() => clearErrors("formErrors")}
        />
      </form>
    </Layout>
  );
};

export default EditProfile;

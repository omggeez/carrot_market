import Button from "@components/buttons/button";
import Input from "@components/inputs/input";
import Layout from "@components/layout";
import { NextPage } from "next";

const EditProfile: NextPage = () => {
  return (
    <Layout title="Edit Profile" canGoBack>
      <form className="py-10 px-4 space-y-4">
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
          <Input type="email" label="Email address" name="email" required />
        </div>

        <div className="space-y-1">
          <Input type="phone" label="Phone number" name="phone" required />
        </div>

        <Button label={"Update profile"} />
      </form>
    </Layout>
  );
};

export default EditProfile;

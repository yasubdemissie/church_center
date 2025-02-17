import Form from "@/Components/My_UI/Auth/form";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
export default async function AuthenticationPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const searchParam = await searchParams;

  const formType = searchParam.form;

  console.log(formType);
  return (
    <div className="grid justify-center align-middle my-auto">
      <div>
        <Form formType={formType || "register"} />
      </div>
    </div>
  );
}

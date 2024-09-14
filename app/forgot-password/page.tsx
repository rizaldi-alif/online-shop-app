import Button from "@/components/button";

export default function ForgotPassword() {
  return (
    <main className="py-16">
      <div className="border rounded-2xl p-4 flex flex-col w-72 max-w-xs mx-auto sm:w-80">
        <h2 className="text-center font-semibold text-md">Reset Password</h2>
        <section className="space-y-2 mt-3 flex flex-col">
          <span className="text-sm">
            Harap masukkan email anda, untuk mencari akun anda.
          </span>
          <input
            type="email"
            name="email"
            id="email"
            className="border rounded-md p-2 text-xs outline-none focus:border-gray-400 transition-all"
            placeholder="Email"
          />

          <Button title="Cari Akun" rounded="md" />
        </section>
      </div>
    </main>
  );
}

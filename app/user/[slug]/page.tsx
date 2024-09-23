export default function Page({ params }: { params: { slug: string } }) {
  return <div className="text-lg text-slate-700"> Dari : {params.slug} </div>;
}

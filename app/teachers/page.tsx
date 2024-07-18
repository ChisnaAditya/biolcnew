import FloatButton from "@/components/FloatButton"
import Card from "./Card"

export default function Teachers() {
    return (
        <div className="relative">
            <div className="w-full p-10 bg-black/90 bg-polygon shadow-2xl">
                <h1 className="text-5xl  text-redLC font-bold">Teachers</h1>
                <h2 className="text-lg text-slate-200">Kampung Inggris LC, Pare</h2>
            </div>
            <div className="flex flex-wrap gap-4 p-10 bg-boxes">
                <Card nama="Chisna" keterangan="Teacher ganteng berpengalaman, siap mendampingi belajar demi masa depan cerah" />
                <Card nama="Chisna" keterangan="Teacher ganteng berpengalaman, siap mendampingi belajar demi masa depan cerah" />
                <Card nama="Chisna" keterangan="Teacher ganteng berpengalaman, siap mendampingi belajar demi masa depan cerah" />
                <Card nama="Chisna" keterangan="Teacher ganteng berpengalaman, siap mendampingi belajar demi masa depan cerah" />
                <Card nama="Chisna" keterangan="Teacher ganteng berpengalaman, siap mendampingi belajar demi masa depan cerah" />
                <Card nama="Chisna" keterangan="Teacher ganteng berpengalaman, siap mendampingi belajar demi masa depan cerah" />
                <Card nama="Chisna" keterangan="Teacher ganteng berpengalaman, siap mendampingi belajar demi masa depan cerah" />
                <Card nama="Chisna" keterangan="Teacher ganteng berpengalaman, siap mendampingi belajar demi masa depan cerah" />
                <Card nama="Chisna" keterangan="Teacher ganteng berpengalaman, siap mendampingi belajar demi masa depan cerah" />
                <Card nama="Chisna" keterangan="Teacher ganteng berpengalaman, siap mendampingi belajar demi masa depan cerah" />
                <Card nama="Chisna" keterangan="Teacher ganteng berpengalaman, siap mendampingi belajar demi masa depan cerah" />

            </div>
            <FloatButton />
        </div>
    )
}

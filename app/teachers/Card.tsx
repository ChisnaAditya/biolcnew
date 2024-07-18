"use client"

import Image from "next/image"
import iconEdit from "../../assets/icons/edit.png"
import { useState } from "react"
type teacher = {
    nama: string,
    keterangan: string
}

export default function Card(props: teacher) {
    const [isOpen, setIsOpen] = useState(false);
    const [rotate, setRotate] = useState("")
    const handleModal = () => {
        setIsOpen(!isOpen);
        setRotate("rotate-45")
    }
    const handleModal = () => {
        setIsOpen(!isOpen);
        setRotate("rotate-45")
    }

    function Modal() {
        return (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md bg-blue-300">
                <form>
                    <h1>Edit</h1>
                    <div className="flex gap-4">
                        <button>Update</button>
                        <button onClick={handleModal} className="text-red-500">Cancel</button>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className="p-4 rounded-xl shadow-custom w-full lg:max-w-xs bg-[#f8f8f8]">
            <div className="flex justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                    <div>
                        <Image alt="foto profil teacher" src={`/favicon.ico`} width={40} height={40} />
                    </div>
                    <div>
                        <h3 className="text-lg text-black/90 font-bold">{props.nama}</h3>
                        <p className="text-sm text-slate-500">Language Center, Pare</p>
                    </div>
                </div>
                <div className="hover:scale-[1.1] transition-all duration-[0.6s]" onClick={handleModal}>
                    <Image alt="icon edit teacher kampung inggris lc pare" src={iconEdit} width={20} height={20} className={`cursor-pointer ${rotate} transition-all duration-[0.6s]`} />
                </div>
                {isOpen && <Modal />}
            </div>
            <div className="divider pb-4 border-t-2"></div>
            <div className="dropdown text-md">{props.keterangan}</div>
        </div>
    )
}

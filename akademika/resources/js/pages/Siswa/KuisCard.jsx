const KuisCard = (soal, idx) => {
    <div className="bg-white h-auto w-4/5 p-4 relative">
        <div className="num bg-blue-900 text-white text-xl font-bold rounded-full absolute">
            {idx}
        </div>
        <div className="text-blue-900 font-semibold">
            {soal.soal}
        </div>
        <div className="pilgan flex flex-col">
            
        </div>
    </div>
}

export default KuisCard

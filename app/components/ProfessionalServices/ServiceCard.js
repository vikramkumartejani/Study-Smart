export default function ServiceCard({ icon, title, description }) {
    return (
        <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4">
                <Image src={icon} alt={title} width={64} height={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-[#4D637B]">{description}</p>
        </div>
    );
} 
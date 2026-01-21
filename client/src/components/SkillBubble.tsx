import { motion } from "framer-motion";

interface SkillBubbleProps {
    skill: string;
    percentage: number;
    size: number;
    position: string;
}

export default function SkillBubble({
    skill,
    percentage,
    size,
    position,
}: SkillBubbleProps) {
    // brightness based on skill level
    const brightness =
        percentage >= 88
            ? "bg-orange-500"
            : percentage >= 82
                ? "bg-orange-600"
                : "bg-orange-700";

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className={`absolute rounded-full flex flex-col items-center justify-center
        text-white font-semibold shadow-2xl ${brightness} ${position}`}
            style={{
                width: size,
                height: size,
            }}
        >
            <span className="text-sm">{skill}</span>
            <span className="text-xs opacity-90">{percentage}%</span>
        </motion.div>
    );
}

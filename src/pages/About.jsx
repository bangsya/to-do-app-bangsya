import JudulSection from "./komponents/JudulSection";
import Section from "./komponents/Section";

export default function About(){
    return (
        <Section name="About">
            <div className="text-center">
                <JudulSection title="About This App" />
                <p className="text-slate-700 mb-2 mt-3">This is a simple To-Do List application built with React.</p>
                <p className="text-slate-500">It allows you to manage your tasks efficiently.</p>
            </div>
        </Section>
    );
}
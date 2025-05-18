import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-poppins">
            Hello, I'm <span className="text-primary">Isha Gusain</span> 👋
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-600">Aspiring software engineer and web developer</p>
          <p className="text-lg mb-8 leading-relaxed">
            I'm a final-year BTech student who loves turning ideas into reality through clean, elegant code. I specialize in React.js, Redux, JavaScript, and UI/UX design. When I'm not coding, you'll find me reading novels, exploring tech innovations, and contributing to open source projects. Currently seeking exciting opportunities in web development!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-medium transition-colors"
              size="lg"
            >
              Get in Touch
            </Button>
            <Button
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
              size="lg"
            >
              View Projects
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          <div className="absolute -z-10 w-72 h-72 md:w-80 md:h-80 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-xl"></div>
          <img 
            src="https://media.licdn.com/dms/image/v2/D4E03AQFyc3HCuvQSVg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1674919348343?e=1753315200&v=beta&t=l3cUxVocvKtRMXHBv7MJIWd_0BWm7vLFX4w41t2PTHg" 
            alt="Isha Gusain Profile Photo" 
            className="rounded-full w-72 h-72 md:w-80 md:h-80 object-cover border-4 border-primary shadow-2xl animate-pulse-slow"
          />
          <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8 bg-white rounded-full p-3 shadow-lg">
            <span className="text-primary text-xl font-bold">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

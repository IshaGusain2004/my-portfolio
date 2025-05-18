import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

export function setActiveNavLink(): void {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    
    if (window.pageYOffset >= sectionTop - headerHeight - 100) {
      current = section.getAttribute('id') || '';
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('text-primary', 'font-semibold');
    
    const href = link.getAttribute('href');
    if (href === `#${current}`) {
      link.classList.add('text-primary', 'font-semibold');
    }
  });
}

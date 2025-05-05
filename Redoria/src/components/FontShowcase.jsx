const fonts = [
    { name: 'Playfair Display', class: 'font-playfair' },
    { name: 'Lora', class: 'font-lora' },
    { name: 'Cormorant Garamond', class: 'font-cormorant' },
    { name: 'Raleway', class: 'font-raleway' },
    { name: 'Marcellus', class: 'font-marcellus' },
    { name: 'Quicksand', class: 'font-quicksand' },
    { name: 'EB Garamond', class: 'font-garamond' },
    { name: 'Open Sans', class: 'font-opensans' },
    { name: 'Alice', class: 'font-alice' },
    { name: 'Josefin Sans', class: 'font-josefin' },
    { name: 'Cinzel', class: 'font-cinzel' },
    { name: 'Great Vibes', class: 'font-vibes' },
    { name: 'Uncial Antiqua', class: 'font-uncial' },
  ];
  
  export default function FontShowcase() {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">📚 Font Showcase</h1>
        {fonts.map((font) => (
          <div key={font.class} className="mb-6 border-b border-gray-200 pb-4">
            <h2 className={`text-2xl ${font.class}`}>
              {font.name}: “A story lives in every line.”
            </h2>
          </div>
        ))}
      </div>
    );
  }
  
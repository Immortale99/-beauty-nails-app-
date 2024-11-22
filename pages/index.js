import React, { useState } from 'react';
import { 
  Camera, 
  Settings, 
  Tag, 
  Calendar,
  Phone,
  Instagram,
  Facebook,
  Package,
  User,
  Bell,
  Home
} from 'lucide-react';

const NailSalonApp = () => {
  const [activeTab, setActiveTab] = useState('accueil');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Beauty Nails</h1>
            <div className="flex items-center space-x-4">
              <Instagram size={20} className="text-gray-500" />
              <Facebook size={20} className="text-gray-500" />
              <Phone size={20} className="text-gray-500" />
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b">
        <div className="overflow-x-auto">
          <div className="flex gap-2 p-4 min-w-max">
            {[
              { id: 'accueil', icon: Home, label: 'Accueil' },
              { id: 'galerie', icon: Camera, label: 'Galerie' },
              { id: 'reservation', icon: Calendar, label: 'Réservation' },
              { id: 'boutique', icon: Package, label: 'Boutique' },
              { id: 'parametres', icon: Settings, label: 'Paramètres' }
            ].map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  activeTab === id ? 'bg-pink-500 text-white' : 'text-gray-600'
                }`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4">
        {activeTab === 'accueil' && (
          <div className="space-y-6">
            <div className="relative h-48 rounded-xl overflow-hidden">
              <img 
                src="/api/placeholder/1200/400" 
                alt="Salon banner" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/80 to-transparent flex items-center">
                <div className="text-white p-6">
                  <h2 className="text-3xl font-bold">Beauty Nails</h2>
                  <p className="text-lg">L'art au bout des doigts</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Nos services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: 'Pose complète', price: '45€' },
                  { name: 'Remplissage', price: '35€' },
                  { name: 'Nail art', price: '15€' }
                ].map((service, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold">{service.name}</h4>
                    <p className="text-pink-500 font-bold">{service.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'galerie' && (
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={`/api/placeholder/300/300`} 
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default NailSalonApp;

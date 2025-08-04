interface InteractiveMapProps {
  address?: string;
  latitude?: number;
  longitude?: number;
  className?: string;
  height?: string;
}

export const InteractiveMap = ({
  address = '809 Cuesta Dr, Suite B, Mountain View, CA 94040',
  latitude: _latitude = 37.4089,
  longitude: _longitude = -122.0877,
  className = '',
  height = 'h-96',
}: InteractiveMapProps) => {
  // Create Google Maps embed URL using the place search (doesn't require API key)
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.7!2d-122.0877!3d37.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x5c3f5c5c5c5c5c5c!2s${encodeURIComponent(
    address
  )}!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus`;

  return (
    <div
      className={`bg-muted/50 rounded-2xl overflow-hidden ${height} ${className}`}
    >
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mail All Center Location"
        className="rounded-2xl"
      />
    </div>
  );
};

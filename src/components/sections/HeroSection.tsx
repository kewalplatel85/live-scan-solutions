import { GenericHero } from '@/components/common/GenericHero';
import { HeroSectionPhoneNumber } from '@/components/common/HeroSectionPhoneNumber';
import { Card } from '@/components/ui/card';
import { badgeData } from '@/data/badges';
import { Clock, MapPin } from 'lucide-react';

export const HeroSection = () => {
  return (
    <GenericHero
      badges={badgeData.liveScanHome}
      title={
        <>
          Professional <span className="text-primary">Live Scan</span>{' '}
          Fingerprinting Services
        </>
      }
      description="Fast, secure, and certified fingerprinting for employment, licensing, and legal requirements. Walk-ins welcome or book online."
      benefits={[
        { text: 'Same-day processing' },
        { text: 'Walk-ins welcome' },
        { text: 'All service types accepted' },
        { text: 'Experienced technicians' },
        { text: 'Trusted by local schools and churches' },
      ]}
      customCTA={<HeroSectionPhoneNumber />}
      quickInfo={[
        { icon: Clock, text: 'Open Mon-Sat' },
        { icon: MapPin, text: 'Multiple Locations' },
      ]}
      rightContent={
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">10k+</div>
                  <div className="text-sm text-muted-foreground">
                    Scans Completed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15min</div>
                  <div className="text-sm text-muted-foreground">
                    Average Processing
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">99%</div>
                  <div className="text-sm text-muted-foreground">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Current Status:</span>
                <span className="text-green-600 font-medium">
                  ✓ Available Now
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Wait Time:</span>
                <span className="font-medium">5-10 minutes</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Next Available:</span>
                <span className="font-medium">Walk-in welcome</span>
              </div>
            </div>
          </div>
        </Card>
      }
    />
  );
};

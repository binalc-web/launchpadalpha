import { useState } from 'react';
import { Header } from '@/components/common/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { ROUTES } from '@/const/routes';

const INVITEE_TYPE_OPTIONS = [
  { value: '', label: 'Select type...' },
  { value: 'individual', label: 'Individual' },
  { value: 'team', label: 'Team' },
];

export function AddBspAssessmentIndividual() {
  const [hasPromoCode, setHasPromoCode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nickname: '',
    email: '',
    workPhone: '',
    inviteeType: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex min-h-screen w-full bg-[var(--page-background)]">
      <div className="flex flex-1 flex-col min-w-0">
        <Header
          breadcrumbs={[
            { label: 'Company Directory', path: ROUTES.COMPANY_DIRECTORY },
            { label: 'Add BSP Assessment (Individual)' },
          ]}
        />
        <main
          className="flex-1 overflow-auto p-6"
          style={{ minHeight: '840px' }}
        >
          <div className="max-w-[1160px] mx-auto">
            {/* Title section */}
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-foreground mb-1">
                Add BSP Assessment (Individual)
              </h1>
              <p className="text-sm text-muted-foreground">
                Begin your individual plan by defining basic & assessment level
                information.
              </p>
            </div>

            {/* Fields wrapper - rounded borders, background, padding */}
            <div className="rounded-lg border border-border bg-background p-6 mb-6">
              <div className="space-y-6">
                {/* Basic Info card */}
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base font-semibold">
                      Basic Info.
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">
                          First Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="Enter first name"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleChange('firstName', e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">
                          Last Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Enter last name"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleChange('lastName', e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nickname">Nickname</Label>
                        <Input
                          id="nickname"
                          placeholder="Enter nickname"
                          value={formData.nickname}
                          onChange={(e) =>
                            handleChange('nickname', e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter email"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange('email', e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="workPhone">Work Phone No.</Label>
                        <Input
                          id="workPhone"
                          placeholder="Enter work phone"
                          value={formData.workPhone}
                          onChange={(e) =>
                            handleChange('workPhone', e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inviteeType">Invitee Type</Label>
                        <Select
                          id="inviteeType"
                          options={INVITEE_TYPE_OPTIONS}
                          value={formData.inviteeType}
                          onChange={(e) =>
                            handleChange('inviteeType', e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Assessment Info card */}
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base font-semibold">
                      Assessment Info.
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="assessmentType">Assessment Type</Label>
                        <Input
                          id="assessmentType"
                          value="Individual"
                          readOnly
                          className="bg-muted cursor-not-allowed"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="invoiceAmount">Invoice Amount</Label>
                        <Input
                          id="invoiceAmount"
                          value="$0.00"
                          readOnly
                          className="bg-muted cursor-not-allowed"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label>Has Promo Code?</Label>
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={hasPromoCode}
                          onCheckedChange={setHasPromoCode}
                        />
                        <span className="text-sm text-muted-foreground">
                          {hasPromoCode ? 'Yes' : 'No'}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Buttons wrapper */}
            <div className="flex items-center justify-end gap-3 pt-4">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button type="submit">Send Invite</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

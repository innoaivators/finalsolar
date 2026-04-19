import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { MessageSquare, Mail, Rocket, ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

interface EnquiryDialogProps {
  productName: string;
  trigger?: React.ReactNode;
  className?: string;
}

const EnquiryDialog: React.FC<EnquiryDialogProps> = ({ productName, trigger, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<'methods' | 'email_form' | 'success'>('methods');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const whatsappNumber = "+96598988281";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello, I would like to enquire about ${productName}.`
  )}`;

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setTimeout(() => {
        setView('methods');
        setErrorMsg('');
      }, 300); // reset state after close animation
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const data = {
      productName,
      email: formData.get("email"),
    };

    try {
      // In production, you would point this to your actual deployed backend URL
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setView('success');
      } else {
        setErrorMsg(result.error?.message || result.error || "Failed to send enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMsg("Network error. Could not connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger || (
          <button className={className || "w-full sm:w-auto bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-1"}>
            Enquire Now
          </button>
        )}
      </DialogTrigger>
      
      <DialogContent className="w-[92vw] sm:w-full sm:max-w-[425px] bg-white rounded-3xl border-gold/20 max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        
        {view === 'methods' && (
          <>
            <DialogHeader className="items-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <Rocket className="text-gold" size={32} />
              </div>
              <DialogTitle className="text-2xl font-bold text-navy">Enquiry Method</DialogTitle>
              <DialogDescription className="text-center text-navy/60">
                How would you like to get in touch regarding <span className="text-gold font-semibold">{productName}</span>?
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl border border-green-200/50 bg-gradient-to-br from-green-50/50 to-emerald-50/50 hover:from-green-100 hover:to-emerald-100 transition-all duration-500 group shadow-[0_8px_30px_rgb(34,197,94,0.12)] hover:shadow-[0_8px_30px_rgb(34,197,94,0.25)]"
              >
                <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none transform group-hover:scale-110 group-hover:-rotate-6">
                  <FaWhatsapp size={120} />
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-green-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 z-10 shrink-0 border border-white/20">
                  <FaWhatsapp size={28} className="sm:w-8 sm:h-8" />
                </div>
                <div className="flex-1 z-10">
                  <h4 className="font-heading font-bold text-navy text-lg sm:text-xl mb-0.5 sm:mb-1 group-hover:text-[#128C7E] transition-colors">WhatsApp</h4>
                  <p className="text-xs sm:text-sm text-navy/60 font-body leading-tight">Instant message & quick response</p>
                </div>
              </a>

              <button
                onClick={() => setView('email_form')}
                className="relative overflow-hidden flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 hover:from-blue-100/80 hover:to-indigo-100/80 transition-all duration-500 group text-left shadow-[0_8px_30px_rgb(59,130,246,0.12)] hover:shadow-[0_8px_30px_rgb(59,130,246,0.25)] w-full"
              >
                <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none transform group-hover:scale-110 group-hover:rotate-6">
                  <SiGmail size={120} />
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#EA4335] to-[#C5221F] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-red-500/30 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 z-10 shrink-0 border border-white/20">
                  <SiGmail size={24} className="sm:w-[28px] sm:h-[28px]" />
                </div>
                <div className="flex-1 z-10">
                  <h4 className="font-heading font-bold text-navy text-lg sm:text-xl mb-0.5 sm:mb-1 group-hover:text-[#C5221F] transition-colors">Email Enquiry</h4>
                  <p className="text-xs sm:text-sm text-navy/60 font-body leading-tight">Send a detailed message directly</p>
                </div>
              </button>
            </div>
          </>
        )}

        {view === 'email_form' && (
          <form onSubmit={handleEmailSubmit} className="flex flex-col">
            <DialogHeader className="items-start relative">
              <button 
                type="button" 
                onClick={() => setView('methods')}
                className="absolute -top-2 -left-2 p-2 text-navy/50 hover:text-navy bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Back to methods"
              >
                <ArrowLeft size={18} />
              </button>
              <div className="w-full text-center mt-2">
                <DialogTitle className="text-xl font-bold text-navy">Send an Enquiry</DialogTitle>
                <DialogDescription className="text-center text-navy/60 mt-1">
                  Enquiring about <span className="font-semibold text-gold">{productName}</span>
                </DialogDescription>
              </div>
            </DialogHeader>

            <div className="grid gap-4 py-6">
              {errorMsg && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100">
                  {errorMsg}
                </div>
              )}
              
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-navy ml-1">Your Email Address <span className="text-red-500">*</span></label>
                <input 
                  required
                  type="email"
                  id="email"
                  name="email" 
                  placeholder="Enter your email so we can reply..." 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                />
                <p className="text-xs text-navy/50 ml-1 mt-2">We will reply to this email with the {productName} details.</p>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-navy hover:bg-navy-light text-white px-8 py-3.5 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-navy/20 disabled:opacity-70 flex items-center justify-center gap-2 mt-auto"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                <>Send Message</>
              )}
            </button>
          </form>
        )}

        {view === 'success' && (
          <div className="py-8 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="text-green-500" size={48} />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-2">Enquiry Sent!</h3>
            <p className="text-navy/60 mb-8 max-w-[250px]">
              Thank you for your interest in {productName}. Our team will get back to you shortly.
            </p>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-green-500/20"
            >
              Close Window
            </button>
          </div>
        )}

      </DialogContent>
    </Dialog>
  );
};

export default EnquiryDialog;

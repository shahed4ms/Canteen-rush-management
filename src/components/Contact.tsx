import { useState } from "react";
import emailjs from 'emailjs-com';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Send, User, MessageSquare, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SERVICE_ID = "service_h2e9l38";
const TEMPLATE_ID = "template_b2cb1ul";
const PUBLIC_KEY = "zVIuf2IUHxapEkNh3";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields to send message and view contact information.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        PUBLIC_KEY
      );
      setShowContactInfo(true);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. You can now view my contact information below.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Email failed",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent animate-fade-in">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 animate-scale-in" style={{animationDelay: '0.2s'}}></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.4s'}}>
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="shadow-2xl bg-black/50 border-gray-800 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3 animate-slide-up" style={{animationDelay: '0.8s'}}>
                  <Send className="w-6 h-6 text-blue-400" />
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="animate-fade-in" style={{animationDelay: '1s'}}>
                    <Label htmlFor="name" className="text-gray-300 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 bg-gray-800 border-gray-700 text-white focus:border-blue-500 transition-colors duration-300"
                      placeholder="Your full name"
                      disabled={loading}
                    />
                  </div>
                  <div className="animate-fade-in" style={{animationDelay: '1.2s'}}>
                    <Label htmlFor="email" className="text-gray-300 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 bg-gray-800 border-gray-700 text-white focus:border-blue-500 transition-colors duration-300"
                      placeholder="your.email@example.com"
                      disabled={loading}
                    />
                  </div>
                  <div className="animate-fade-in" style={{animationDelay: '1.4s'}}>
                    <Label htmlFor="phone" className="text-gray-300 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1 bg-gray-800 border-gray-700 text-white focus:border-blue-500 transition-colors duration-300"
                      placeholder="+91 XXXXX XXXXX"
                      disabled={loading}
                    />
                  </div>
                  <div className="animate-fade-in" style={{animationDelay: '1.6s'}}>
                    <Label htmlFor="message" className="text-gray-300 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-1 w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300"
                      placeholder="Tell me about your project or just say hello!"
                      disabled={loading}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 animate-scale-in"
                    style={{animationDelay: '1.8s'}}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 mr-2 inline-block" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message & View Contact Info
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="shadow-2xl bg-black/50 border-gray-800 backdrop-blur-sm hover:border-green-500/50 transition-all duration-500 animate-scale-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-green-400" />
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Email</p>
                        <a href="mailto:shahedsharfi@gmail.com" className="text-blue-400 hover:underline transition-colors duration-300">
                          shahedsharfi@gmail.com
                        </a>
                      </div>
                    </div>
                    {showContactInfo && (
                      <div className="flex items-center space-x-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
                        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-white">Phone</p>
                          <a href="tel:9659366766" className="text-green-400 hover:underline transition-colors duration-300">
                            +91 9659366766
                          </a>
                        </div>
                      </div>
                    )}
                     <div className="flex items-center space-x-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
                      <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                        <Linkedin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">LinkedIn</p>
                        <a 
                          href="https://linkedin.com/in/mohammad-shahed-25834a319" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-purple-400 hover:underline transition-colors duration-300"
                        >
                          mohammad-shahed-25834a319
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        <Github className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">GitHub</p>
                        <a 
                          href="https://github.com/shahed4ms" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-400 hover:underline transition-colors duration-300"
                        >
                          shahed4ms
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {showContactInfo && (
                <Card className="shadow-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white border-gray-800 animate-scale-in" style={{animationDelay: '0.8s'}}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
                    <p className="mb-4 text-blue-100">
                      Thank you for sharing your details! I'm always excited to work on new projects and collaborate with fellow developers and innovators.
                    </p>
                    <div className="flex space-x-4">
                      <Button variant="secondary" size="sm" asChild className="animate-fade-in" style={{animationDelay: '1s'}}>
                        <a href="mailto:shahedsharfi@gmail.com">
                          <Mail className="w-4 h-4 mr-2" />
                          Email Me
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-blue-600 animate-fade-in" style={{animationDelay: '1.2s'}} asChild>
                        <a href="https://linkedin.com/in/mohammad-shahed-25834a319" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-blue-600 animate-fade-in" style={{animationDelay: '1.4s'}} asChild>
                        <a href="https://github.com/shahed4ms" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {!showContactInfo && (
                <Card className="shadow-2xl bg-black/50 border-gray-800 backdrop-blur-sm animate-fade-in" style={{animationDelay: '0.8s'}}>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                    <p className="text-gray-400 mb-6">
                      Please fill out the contact form to view my phone number and get in touch more directly.
                    </p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <p>✓ Submit your complete details</p>
                      <p>✓ Include your phone number</p>
                      <p>✓ Write a brief message</p>
                    </div>
                  </CardContent>
                </Card>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

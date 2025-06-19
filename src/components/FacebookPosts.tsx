import React from 'react';
import { Facebook, Heart, MessageCircle, Share2, ExternalLink } from 'lucide-react';

const FacebookPosts: React.FC = () => {
  const posts = [
    {
      content: 'Celebrating the success of our Digital Literacy Workshop! 150+ community members learned essential computer skills. Thank you to all volunteers who made this possible. 🎉 #DigitalEducation #CommunityDevelopment',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      likes: 234,
      comments: 18,
      shares: 12,
      time: '2 hours ago'
    },
    {
      content: 'Proud to announce the opening of our 15th learning center in rural Rajasthan! This milestone brings quality education closer to 500+ children. Every step counts towards our mission. 📚✨ #Education #RuralDevelopment',
      image: 'https://images.pexels.com/photos/8926554/pexels-photo-8926554.jpeg',
      likes: 456,
      comments: 32,
      shares: 28,
      time: '1 day ago'
    },
    {
      content: 'Teacher appreciation day with our amazing educators! These heroes are shaping young minds and building the future of our communities. Saluting their dedication and hard work. 👏 #Teachers #Education #Heroes',
      image: 'https://images.pexels.com/photos/8471791/pexels-photo-8471791.jpeg',
      likes: 189,
      comments: 24,
      shares: 15,
      time: '3 days ago'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
            <Facebook className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with our latest activities, achievements, and community stories 
            from our social media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Post Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Facebook className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Shiksha Se Shikhar Tak</h3>
                    <p className="text-sm text-gray-500">{post.time}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">{post.content}</p>
              </div>

              {/* Post Image */}
              <div className="relative">
                <img
                  src={post.image}
                  alt="Post content"
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Post Interactions */}
              <div className="p-6 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{post.likes} likes</span>
                  <span>{post.comments} comments • {post.shares} shares</span>
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors duration-200">
                    <Heart className="h-5 w-5" />
                    <span className="font-medium">Like</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors duration-200">
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-medium">Comment</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors duration-200">
                    <Share2 className="h-5 w-5" />
                    <span className="font-medium">Share</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Facebook className="h-5 w-5 mr-2" />
            Follow Us on Facebook
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FacebookPosts;
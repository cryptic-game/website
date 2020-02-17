"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BlogPost = require("../models/BlogPost");

var _default = {
  Query: {
    blogPosts(_, {
      limit = undefined
    }) {
      return _BlogPost.BlogPost.findAll({
        raw: true,
        limit
      });
    },

    blogPost(_, {
      slug
    }) {
      return _BlogPost.BlogPost.findOne({
        where: {
          slug
        },
        raw: true
      });
    },

    blogPostByID(_, {
      id
    }) {
      return _BlogPost.BlogPost.findByPk(id, {
        raw: true
      });
    }

  },
  BlogPost: {}
};
exports.default = _default;
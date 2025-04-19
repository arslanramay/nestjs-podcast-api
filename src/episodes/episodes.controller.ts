import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
  @Get()
  findAll() {
    return 'All Episodes';
  }

  @Get('featured')
  findFeatured() {
    return 'All Featured Episodes';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('findOne', id);
    return `Episode ${id}`;
    // return 'One Episode';
  }
}
